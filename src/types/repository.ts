import type { Property } from "./database";

export interface PropertiesRepository {
	getPropertiesByCollection: (collectionName: string) => Promise<Property[]>;
}
