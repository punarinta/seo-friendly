if (navigator.userAgent === 'SeoFriendly') {
    // Strip out all content except the root
    while (document.firstChild) {
        document.removeChild(document.firstChild)
    }

    const div = document.createElement('div')

    div.className = 'root'
    div.innerHTML = 'This is my content'
    document.appendChild(div)
}
