import type { Property } from "../../types/database";

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
