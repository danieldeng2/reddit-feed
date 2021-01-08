const dev = {
	SERVER_URL: `http://${window.location.hostname}:5000`
}

const prod = {
	SERVER_URL: "",
}

const config = process.env.NODE_ENV === "production" ? prod : dev;

export const api = {
  REDDIT_ARTICLES: `${config.SERVER_URL}/api/articles`,
}
