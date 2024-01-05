import { InlineKeyboard } from "grammy";

export const propertyControlKeyboard = new InlineKeyboard()
	.text("« Previous Property", "previous-property")
	.text("Next Property » ", "next-property");
