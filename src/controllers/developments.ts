import { Composer } from "grammy";
import type { CustomContext } from "../types/context.js";
import { developmentsMenu } from "../menus/developmentsMenu.js";

export const developmentsController = new Composer<CustomContext>();
developmentsController.callbackQuery("view-developments", async ctx => {
	ctx.answerCallbackQuery();
	await ctx.reply("Please select the development", {
		reply_markup: developmentsMenu
	});
});

developmentsController.callbackQuery(
	"view-development:salisol-resort",
	async ctx => {
		ctx.answerCallbackQuery();
		await ctx.reply("SaliSol Resort Selected");
	}
);

developmentsController.callbackQuery(
	"view-development:salisol-hills",
	async ctx => {
		ctx.answerCallbackQuery();
		await ctx.reply("SaliSol Hills Selected");
	}
);

developmentsController.callbackQuery(
	"view-development:salisol-golf",
	async ctx => {
		ctx.answerCallbackQuery();
		await ctx.reply("SaliSol Golf Selected");
	}
);