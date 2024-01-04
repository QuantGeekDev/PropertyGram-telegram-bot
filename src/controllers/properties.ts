import { Composer } from "grammy";
import type { CustomContext } from "../types/context.js";
import type { Property } from "../types/database.js";
import { generatePropertyDescription } from "../services/Property/property.service.js";

export const propertiesController = new Composer<CustomContext>();

propertiesController.command("properties", async ctx => {
	const properties = (await ctx.db.property.find({}).toArray()) as Property[];
	const currentPropertyIndex = 0;

	const currentProperty = properties[currentPropertyIndex];

	const { thumbnailUrl, name, collectionName, videoUrl } = currentProperty;

	const propertyDescription = generatePropertyDescription(currentProperty);

	await ctx.reply(propertyDescription, {
		parse_mode: "MarkdownV2"
	});
	await ctx.replyWithPhoto(thumbnailUrl, {
		caption: `${collectionName}: ${name}`
	});

	await ctx.replyWithVideo(videoUrl);
});
