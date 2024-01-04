/* eslint-disable no-useless-escape */
import { Composer } from "grammy";
import type { CustomContext } from "../types/context.js";
import type { Property } from "../types/database.js";

export const propertiesController = new Composer<CustomContext>();

propertiesController.command("properties", async ctx => {
	const properties = (await ctx.db.property.find({}).toArray()) as Property[];
	const currentPropertyIndex = 0;

	const currentProperty = properties[currentPropertyIndex];

	const { thumbnailUrl, name, collectionName } = currentProperty;

	await ctx.reply(` *${collectionName}* : ${name}`, {
		parse_mode: "MarkdownV2"
	});
	await ctx.replyWithPhoto(thumbnailUrl);
	await ctx.api.sendMessage(ctx.chat.id, ":D");
});
