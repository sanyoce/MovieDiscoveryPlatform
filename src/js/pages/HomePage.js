export function homePage(){
    const div = document.createElement('div')
    const namePage = document.createElement('h1')
    namePage.textContent = 'This is the movie platform'
    div.append(namePage)
    return div
}