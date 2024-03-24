import SearchIcon from "../icons/searchIcon.tsx";

export default function SearchInput() {
    return <div className="searchBox">
        <SearchIcon/>
        <input id="searchInput" placeholder="검색어를 입력하세요"/>
    </div>
}