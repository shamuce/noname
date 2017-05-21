import React from "react";
import styles from "./SocialShare.scss";

import { ShareButtons, ShareCounts, generateShareIcon } from "react-share";
const {
	FacebookShareButton,
	TwitterShareButton,
	VKShareButton,
	TelegramShareButton
} = ShareButtons;

const FacebookIcon = generateShareIcon("facebook");
const TwitterIcon = generateShareIcon("twitter");
const VKIcon = generateShareIcon("vk");
const TelegramIcon = generateShareIcon("telegram");

class SocialShare extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const shareUrl = "https://github.com/shamuce/pokedux";
		const title = "@shamuce";
		const picture = "http://pics.wikireality.ru/upload/thumb/f/f4/82f2426f2971.jpg/300px-82f2426f2971.jpg"
		return (
			<div className={styles.social_list}>

				<FacebookShareButton
					url={shareUrl}
					title={title}
					picture={picture}
					className={styles.social_item}
				>
					<FacebookIcon size={32} round />
				</FacebookShareButton>
				<TwitterShareButton
					url={shareUrl}
					title={title}
					className={styles.social_item}
				>
					<TwitterIcon size={32} round />
				</TwitterShareButton>
				<TelegramShareButton
					url={shareUrl}
					title={title}
					className={styles.social_item}
				>
					<TelegramIcon size={32} round />
				</TelegramShareButton>
				<VKShareButton
					url={shareUrl}
					image={picture}
					windowWidth={660}
					windowHeight={460}
					className={styles.social_item}
				>
					<VKIcon size={32} round />
				</VKShareButton>
			</div>
		);
	}
}

export default SocialShare;
