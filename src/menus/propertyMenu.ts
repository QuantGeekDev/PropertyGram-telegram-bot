import { InlineKeyboard } from "grammy";

export const fullPropertyControlKeyboard = (
	propertyId: string
): InlineKeyboard => {
	const salisolHillsDropboxUrl =
		"https://www.dropbox.com/sh/t6330gcog0lz7dh/AADqYOkfEnvIQ0RF6Lr0eRBja?dl=0";

	const keyboard = new InlineKeyboard()
		.text("« Previous Property", "previous-property")
		.text("Next Property » ", "next-property")
		.row()
		.text("📞 Contact me about this property", `contact_property_${propertyId}`)
		.row()
		.url("🖼️ Our Dropbox", salisolHillsDropboxUrl);
	return keyboard;
};

export const nextPropertyControlKeyboard = (
	propertyId: string
): InlineKeyboard => {
	const salisolHillsDropboxUrl =
		"https://www.dropbox.com/sh/t6330gcog0lz7dh/AADqYOkfEnvIQ0RF6Lr0eRBja?dl=0";

	const keyboard = new InlineKeyboard()
		.text("Next Property » ", "next-property")
		.row()
		.text("📞 Contact me about this property", `contact_property_${propertyId}`)
		.row()
		.url("🖼️ Our Dropbox", salisolHillsDropboxUrl);
	return keyboard;
};

export const previousPropertyControlKeyboard = (
	propertyId: string
): InlineKeyboard => {
	const salisolHillsDropboxUrl =
		"https://www.dropbox.com/sh/t6330gcog0lz7dh/AADqYOkfEnvIQ0RF6Lr0eRBja?dl=0";

	const keyboard = new InlineKeyboard()
		.text("« Previous Property", "previous-property")
		.row()
		.text("📞 Contact me about this property", `contact_property_${propertyId}`)
		.row()
		.url("🖼️ Our Dropbox", salisolHillsDropboxUrl);
	return keyboard;
};
