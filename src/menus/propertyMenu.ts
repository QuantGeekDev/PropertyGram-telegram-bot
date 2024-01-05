import { InlineKeyboard } from "grammy";

export const fullPropertyControlKeyboard = new InlineKeyboard()
	.text("« Previous Property", "previous-property")
	.text("Next Property » ", "next-property");

export const nextPropertyControlKeyboard = new InlineKeyboard().text(
	"Next Property » ",
	"next-property"
);

export const previousPropertyControlKeyboard = new InlineKeyboard().text(
	"« Previous Property",
	"previous-property"
);
