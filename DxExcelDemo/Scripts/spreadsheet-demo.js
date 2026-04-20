window.onSpreadsheetPopupMenuShowing = function (s, e) {
    console.log("menuType:", e.menuType);

    if (e.menuType === ASPxClientSpreadsheetPopupMenuType.Cell) {
        var item = new ASPxClientSpreadsheetPopupMenuItem(
            "showCellValue",
            "Değeri Göster",
            null,
            null
        );

        e.menuItems.Add(item);
    }
};

window.onSpreadsheetCustomCommandExecuted = function (s, e) {
    if (e.commandName === "showCellValue") {
        var value = s.GetActiveCellValue();
        alert("Hücre değeri: " + value);
    }
};