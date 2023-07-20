import { CheckCircle } from "@mui/icons-material";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = (channelDetail) => {
	return (
		<Box
			sx={{
				boxShadow: "none",
				borderRadius: "20px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: { xs: "365px", md: "320px" },
				height: "326px",
				margin: "auto",
			}}>
			<Link to={`/channel/${channelDetail?.id?.channelId}`}>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						textAlign: "center",
						color: "#FFF",
					}}>
					<CardMedia
						image={
							channelDetail?.snippet?.thumbnails?.high?.url ||
							demoProfilePicture
						}
						sx={{
							borderRadius: "50%",
							height: "180px",
							width: "180px",
							mb: "2",
							border: "1px solid #e3e3e3",
						}}
					/>
					<Typography variant="h6" color={"#FFF"}>
						{channelDetail?.snippet?.title}
						<CheckCircle
							sx={{ fontSize: 14, color: "gray", ml: "5px" }}></CheckCircle>
					</Typography>

					{channelDetail?.statistics?.subcriberCount && (
						<Typography>
							{parseInt(
								channelDetail?.statistics?.subcriberCount
							).toLocaleString()}
						</Typography>
					)}
				</CardContent>
			</Link>
		</Box>
	);
};

export default ChannelCard;
