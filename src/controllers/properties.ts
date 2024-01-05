import { Composer } from "grammy";
import type { CustomContext } from "../types/context.js";
import type { Property } from "../types/database.js";
import {
	generatePropertyDescription,
	generatePropertyPhotoAlbum
} from "../services/Property/property.service.js";
import { propertyControlKeyboard } from "../menus/propertyMenu.js";

export const propertiesController = new Composer<CustomContext>();
let currentPropertyIndex = 0;

propertiesController.command("properties", async ctx => {
	const properties = (await ctx.db.property.find({}).toArray()) as Property[];
	const currentProperty = properties[currentPropertyIndex];
	const totalProperties = properties.length;
	const { videoFileId, albumUrls } = currentProperty;

	const propertyDescription = generatePropertyDescription(currentProperty);
	const propertyPhotoAlbum = generatePropertyPhotoAlbum(albumUrls);
	await ctx.reply(propertyDescription, {
		parse_mode: "MarkdownV2"
	});
	await ctx.replyWithVideo(videoFileId);
	await ctx.replyWithMediaGroup(propertyPhotoAlbum);
	await ctx.reply(`Property ${currentPropertyIndex + 1}/${totalProperties}`, {
		reply_markup: propertyControlKeyboard
	});

	propertiesController.callbackQuery("next-property", async ctx => {
		ctx.answerCallbackQuery("");
		currentPropertyIndex++;
		const currentProperty = properties[currentPropertyIndex];
		const totalProperties = properties.length;
		const { videoFileId, albumUrls } = currentProperty;
		const propertyDescription = generatePropertyDescription(currentProperty);
		const propertyPhotoAlbum = generatePropertyPhotoAlbum(albumUrls);
		await ctx.reply(`Property ${currentPropertyIndex + 1}/${totalProperties}`);
		await ctx.reply(propertyDescription, {
			parse_mode: "MarkdownV2"
		});
		await ctx.replyWithVideo(videoFileId);
		await ctx.replyWithMediaGroup(propertyPhotoAlbum);
		await ctx.reply(`Property ${currentPropertyIndex + 1}/${totalProperties}`, {
			reply_markup: propertyControlKeyboard
		});
	});

	propertiesController.callbackQuery("previous-property", async ctx => {
		ctx.answerCallbackQuery("");
		currentPropertyIndex--;
		const currentProperty = properties[currentPropertyIndex];
		const totalProperties = properties.length;
		const { videoFileId, albumUrls } = currentProperty;
		const propertyDescription = generatePropertyDescription(currentProperty);
		const propertyPhotoAlbum = generatePropertyPhotoAlbum(albumUrls);
		await ctx.reply(`Property ${currentPropertyIndex + 1}/${totalProperties}`);
		await ctx.reply(propertyDescription, {
			parse_mode: "MarkdownV2"
		});
		await ctx.replyWithVideo(videoFileId);
		await ctx.replyWithMediaGroup(propertyPhotoAlbum);
		await ctx.reply(`Property ${currentPropertyIndex + 1}/${totalProperties}`, {
			reply_markup: propertyControlKeyboard
		});
	});
});
