export const copyMessage = (message) => {

    let { emoji, type, scope, shortSummary, body, footer } = message;
    const header = `${emoji} ${type + scope}: ${shortSummary}`;
    body = !!body ? `\n\n${body}` : "";
    footer = !!footer ? `\n\n${footer}` : "";
    const text = header + body + footer;
    navigator.clipboard.writeText(text).then(
        () => {
            console.log('복사 성공');
        },
        (err) => {
            console.error('복사 실패', err);
        }
    );
}