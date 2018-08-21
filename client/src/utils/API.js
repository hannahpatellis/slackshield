import axios from "axios";

export default {
  // Gets articles from the NYT API
  initialLoad: () => axios.get('/api/all'),
  getAllMessages: function(includeDeleted) {
    return axios.get( `/api/messages/?includeDeleted=${includeDeleted}` );
  },
  // Gets all saved articles
  getLatestMessages: function() {
    return axios.get("/api/messages/?latest=true");
  },
  // Deletes the saved article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};