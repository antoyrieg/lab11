$(function() {
		$.get('https://www.reddit.com/r/aww/.json', function(responseBody){
		responseBody.data.children.slice(1,11).forEach(function(post) {
			var $list = $("<ol class='list'>");
			var $tile = $("<li class='post'>");	
			$list.append($tile);
			var $title = $('<h3 class="postTitle">').text( post.data.title); 
			$tile.append($title); 				
			var $author = $('<h5 class="postAuthor">').text(post.data.author); 
			$tile.append($author);
			var $link = $("<a class='link'>").attr("href", "https://www.reddit.com" + post.data.permalink);
			var $image = $('<img class="thumbnail">').attr("src", post.data.thumbnail);
			$link.append($image)
			$tile.append($link);
			$("#main").append($tile);
		});

	})

});