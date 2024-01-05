import { type InputMediaPhoto } from "grammy/types";
import { InputMediaBuilder } from "grammy";
import type { Property } from "../../types/database.js";

export const generatePropertyDescription = (property: Property): string => {
	const {
		name,
		collectionName,
		availability,
		price,
		plotMetersSquared,
		builtMetersSquared
	} = property;

	// Property description uses Telegram's Markdown V2
	const propertyDescription = `*🏠 ${collectionName}: ${name}*\n\nPlot Size: ${plotMetersSquared}m2 \nBuilt Meters: ${builtMetersSquared}m2\nPrice: ${price
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}€${
		availability ? "" : "Reserved"
	}\n`;

	return propertyDescription;
};

export const generatePropertyPhotoAlbum = (
	albumUrls: string[]
): InputMediaPhoto[] => {
	const photoAlbum: InputMediaPhoto[] = [];

	for (const photoUrl of albumUrls) {
		const photo = InputMediaBuilder.photo(photoUrl);
		photoAlbum.push(photo);
	}

	return photoAlbum;
};
