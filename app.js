const allPosts = [];

//When the button is clicked, run the function to add post to the allPosts array and reset the value to null
document.getElementById('button').addEventListener('click', postToArray = () => {
	let toPost = document.getElementById('submission').value
	if (document.getElementById('submission').value == '') {
		alert('There is nothing to post!')
	} else {
	allPosts.unshift(toPost);
	document.getElementById('submission').value = null;
	makeAPost();
	}
});

document.getElementById('submission').addEventListener('keyup', (event) => {
	if (event.which === 13) {
	let toPost = document.getElementById('submission').value
	if (document.getElementById('submission').value == '') {
		alert('There is nothing to post!')
	} else {
	allPosts.unshift(toPost);
	document.getElementById('submission').value = null;
	makeAPost();
	}
}
});


const makeAPost = () => {
	let history = document.getElementById('feed');
	let blurb = document.createElement('li');
	let postText = allPosts[0]
	blurb.append(postText);
	if (allPosts.length == 1) {
	history.appendChild(blurb);	
	} else {
		history.insertBefore(blurb, history.childNodes[0]);	
	}
}
