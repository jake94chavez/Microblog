const allPosts = [];

// const makeAPost = () => {
// 	let blurb = document.createElement('li');
// 	let field = 4;
// 	blurb.appendChild(field);
// 	document.getElementById('feed').appendChild(blurb);
// }

// When the button is clicked, run the function to add post to the allPosts array and reset the value to null
document.getElementById('button').addEventListener('click', postToArray = () => {
	let toPost = document.getElementById('submission').value
	allPosts.unshift(toPost);
	document.getElementById('submission').value = null;
});

// No clue why but allPosts array starts with allPosts[0] = ""
// This is here to get rid of that
if (allPosts.last === "") {
	allPosts.pop();
}