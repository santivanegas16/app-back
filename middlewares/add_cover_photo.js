export default async (req, res, next) => {
	// if (req.body.cover_photo) {
	//   return next();
	// } else {
	req.body.cover_photo = req.body.pages[0];
	return next();
	// }
};

// export default addCoverPhotoMiddlewares;