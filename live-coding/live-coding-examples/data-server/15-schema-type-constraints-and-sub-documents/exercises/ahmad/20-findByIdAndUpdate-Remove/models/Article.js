import mongoose from "mongoose";

const ArticleSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	teaser: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
}, { versionKey: false });

const Article = mongoose.model("Article", ArticleSchema);

async function readAll () {
	return await Article.find();
}

async function readOne (id) {
	return await Article.findById(id);
}

async function write (title, teaser, text) {
	const article = new Article({
		title,
		teaser,
        text,
	});

	return await article.save();
}

async function updateCredentials (email, password) {
	return null;
}

async function updateById (id, updateArticle){

	return await Article.findByIdAndUpdate(
		id, 
		updateArticle, 
		{new: true, runValidators: true}
	);
}
async function addArticleToReadingList (ArticleId, articleId) {
	return null;
}

async function markArticleAsRead (ArticleId, articleId) {
	return null;
}

export default {
	readAll,
    readOne,
	updateCredentials,
	addArticleToReadingList,
	markArticleAsRead,
	updateById
};