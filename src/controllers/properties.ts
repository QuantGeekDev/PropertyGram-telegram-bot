import { Composer } from "grammy";
import type { CustomContext } from "../types/context.js";
import type { Property } from "../types/database.js";
import { displayProperty } from "../services/Property/property.service.js";

export const propertiesController = new Composer<CustomContext>();
let currentPropertyIndex = 0;

propertiesController.command("properties", async ctx => {
	const properties = (await ctx.db.property.find({}).toArray()) as Property[];
	await displayProperty(ctx, properties, currentPropertyIndex);

	propertiesController.callbackQuery("next-property", async ctx => {
		ctx.answerCallbackQuery("");
		if (currentPropertyIndex + 1 < properties.length) {
			currentPropertyIndex++;
			await displayProperty(ctx, properties, currentPropertyIndex);
		}
	});

	propertiesController.callbackQuery("previous-property", async ctx => {
		ctx.answerCallbackQuery("");
		if (currentPropertyIndex + 1 > 0) {
			currentPropertyIndex--;
			await displayProperty(ctx, properties, currentPropertyIndex);
		}
	});
});
