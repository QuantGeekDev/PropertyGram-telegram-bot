import { InlineKeyboard } from "grammy";

export const fullPropertyControlKeyboard = new InlineKeyboard()
	.text("« Previous Property", "previous-property")
	.text("Next Property » ", "next-property")
	.row()
	.text("Contact me  about this property", "contact-sales");

export const nextPropertyControlKeyboard = new InlineKeyboard()
	.text("Next Property » ", "next-property")
	.row()
	.text("Contact me about this property", "contact-sales");

export const previousPropertyControlKeyboard = new InlineKeyboard()
	.text("« Previous Property", "previous-property")
	.row()
	.text("Contact me about this property", "contact-sales");
