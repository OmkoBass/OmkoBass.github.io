var textarea = document.getElementById("textarea");
var editor = CodeMirror.fromTextArea(textarea, {
    mode: "python",
    lineNumbers: true,
    theme: "dracula",
    autoCloseTags: true,
    tabSize: 12
});
editor.setSize("60%","450");
editor.refresh()