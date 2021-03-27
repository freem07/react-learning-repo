export const createPages = (pages, pagesCount, currentPage) => {
    if(pagesCount > 20) {
        if(currentPage > 10) {
            for (let i = currentPage-9; i <= currentPage+10; i++) {
                pages.push(i)
                if(i == pagesCount) break
            }
        }
        else {
            for (let i = 1; i <= 20; i++) {
                pages.push(i)
                if(i == pagesCount) break
            }
        }
    }  else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    }
}