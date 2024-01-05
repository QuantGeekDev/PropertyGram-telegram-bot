import type { CustomContext } from "../../types/context";

export const notifySalesTeam = (ctx: CustomContext) => {
	const adminGroupId = process.env.ADMIN_GROUP_ID;
	const userId = ctx.config.user.userId;
	const userName = ctx.config.user.name;
	const propertyOfInterest = null;
	const userClickable = `[${userName}](tg://user?id=${userId})`;

	const formattedNotificationMessage = `A new client is requesting information:\nName: ${userName}\nUser: @${userClickable}\n${
		propertyOfInterest ? `Interested in ${propertyOfInterest}` : ""
	}`;

	ctx.api.sendMessage(adminGroupId, formattedNotificationMessage, {
		parse_mode: "MarkdownV2"
	});
};
