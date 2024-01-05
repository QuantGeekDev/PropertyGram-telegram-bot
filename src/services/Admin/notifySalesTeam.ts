import type { CustomContext } from "../../types/context";

export const notifySalesTeam = (ctx: CustomContext) => {
	const adminGroupId = process.env.ADMIN_GROUP_ID;
	const userId = ctx.config.user.userId;
	const userName = ctx.config.user.name;
	const requestTimestamp = Date.now();
	const propertyOfInterest = null;
	ctx.api.sendMessage(
		adminGroupId,
		`A new client is requesting information:\nName: ${userName}\nUserID: ${userId}\nTime: ${requestTimestamp}\n${
			propertyOfInterest ? `Interested in ${propertyOfInterest}` : ""
		}}`
	);
};
