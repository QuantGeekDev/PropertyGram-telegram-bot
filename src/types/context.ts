import type { Context, SessionFlavor } from "grammy";
import type { I18nContextFlavor, TemplateData } from "@grammyjs/i18n";
import type { Extra } from "./telegram.js";
import type { Chat, Database, Property, User } from "./database.js";

export interface Custom<C extends Context> {
	text: (
		text: string,
		templateData?: TemplateData,
		extra?: Extra
	) => ReturnType<C["reply"]>;

	config: {
		user: User;
		chat: Chat | null;
		property: Property | null;
	};

	db: Database;
}

export type CustomContextMethods = Custom<Context>;

export type CustomContext = Context &
	Custom<Context> &
	I18nContextFlavor &
	// eslint-disable-next-line @typescript-eslint/ban-types
	SessionFlavor<{}>;
