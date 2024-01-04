import { InputFile, type InputMediaPhoto } from "grammy/types";
import type { Property } from "../../types/database";
import { InputMediaBuilder } from "grammy";

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
	const propertyDescription = `*${collectionName}: ${name}*\nPlot Size:${plotMetersSquared}\nBuilt Meters:${builtMetersSquared}Price: ${price}${
		availability ? "" : "Reserved"
	}\n`;

	return propertyDescription;
};

export const generatePropertyPhotoAlbum = (
	albumUrls: string[]
): InputMediaPhoto[] => {
	const photoAlbum: InputMediaPhoto[] = [];

	for (const photoUrl of albumUrls) {
		const photo = InputMediaBuilder.photo(new InputFile(photoUrl));
		photoAlbum.push(photo);
	}

	return photoAlbum;
};
