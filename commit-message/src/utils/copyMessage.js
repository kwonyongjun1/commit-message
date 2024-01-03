export const copyMessage = (message) => {

    let { emoji, type, scope, shortSummary, body, footer } = message;
    const header = `${emoji} ${type + scope}: ${shortSummary}`;
    body = !!body ? `\n\n${body}` : "";
    footer = !!footer ? `\n\n${footer}` : "";
    const temp4copy = document.createElement("textarea");
    temp4copy.value = header + body + footer;
    document.body.appendChild(temp4copy);
    temp4copy.select();
    document.execCommand("copy");
    document.body.removeChild(temp4copy);
    
}