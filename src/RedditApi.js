export async function fetchPosts(url) {

  let response = await fetch(`https://www.reddit.com/r/` + url + `.json`);
  let posts = await response.json();
  console.log(posts)
  return posts;

}

export async function fetchMember(url) {

  let response = await fetch(`https://www.reddit.com/r/` + url + `.json`);
  let member = await response.json();
  console.log(member)
  return member;

}
