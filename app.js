const allPosts = [];

//When the button is clicked, run the function to add post to the allPosts array and reset the value to null
document.getElementById('button').addEventListener('click', postToArray = () => {
	let toPost = document.getElementById('submission').value
	allPosts.unshift(toPost);
	document.getElementById('submission').value = null;
	makeAPost();
});

const makeAPost = () => {
	let blurb = document.createElement('LI');
	let postText = allPosts[0]
	blurb.append(postText);
	document.getElementById('feed').appendChild(blurb);
}