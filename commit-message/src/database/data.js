export const typeList = [
    {name : "Feat", description : "새로운 기능을 추가할 경우", rec : "sparkles"},
    {name : "Fix", description : "버그를 고친 경우", rec : "bug" },
    {name : "Design", description : "CSS 등 사용자 UI 디자인 변경", rec : "lipstick"},
    {name : "!BREAKING CHANGE", description : "대규모 수정", rec : "boom"},
    {name : "!HOTFIX", description : "급하게 치명적인 버그를 고쳐야하는 경우", rec : "ambulance"},
    {name : "Style", description : "코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우", rec : "art"},
    {name : "Refactor", description : "프로덕션 코드 리팩토링", rec : "recycle"},
    {name : "Comment", description :   "주석 추가 및 변경", rec : "bulb"},
    {name : "Docs", description : "문서를 수정한 경우", rec : "memo"},
    {name : "Test", description : "테스트 추가, 테스트 리팩토링 (프로덕션 코드 변경 X)", rec : "test_tube"},   
    {name : "Chore", description : "빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우 (프로덕션 코드 변경 X)", rec : "building_construction"},   
    {name : "Create", description : "새파일을 생성한 경우"   , rec : "newspaper"},
    {name : "Rename", description : "파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우", rec : "truck"},   
    {name : "Remove", description : "파일을 삭제하는 작업만 수행한 경우", rec : "fire"},
    {name : "Build", description : "컴파일 후 코드, 새로운 패키지 업데이트", rec : "package"}
];

export const emojiList = [
    {id : "sparkles", emoji : "✨", relType: "Feat"},
    {id : "bug", emoji : "🐛", relType: "Fix"},
    {id : "lipstick", emoji : "💄", relType: "Design"},
    {id : "boom", emoji : "💥", relType: "!BREAKING CHANGE"},
    {id : "ambulance", emoji : "🚑", relType: "!HOTFIX"},
    {id : "art", emoji : "🎨", relType: "Style"},
    {id : "recycle", emoji : "️♻", relType: "Refactor"},
    {id : "bulb", emoji : "💡", relType: "Comment"},
    {id : "memo", emoji : "📝", relType: "Docs"},
    {id : "test_tube", emoji : "🧪", relType: "Test"},
    {id : "building_construction", emoji : "🏗", relType: "Chore"},
    {id : "newspaper", emoji : "📰", relType: "Create"},
    {id : "truck", emoji : "🚚", relType: "Rename"},
    {id : "fire", emoji : "🔥", relType: "Remove"},
    {id : "package", emoji : "📦", relType: "Build"},
];

export const LANGUAGE = {
    ENGLISH : 'EN',
    KOREAN : 'KO',
};
