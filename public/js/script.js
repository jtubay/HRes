const runTableQuery = () => {
    // $.ajax({ url: "/api/tables", method: "GET" })
    //     .then(tableData => {

    //         console.log(tableData);
    //         console.log("------------------------------------");

    //         for(let i = 0; i < tableData.length; i++) {
    //             const tableList = $("#tableList");
    //             const listItem = $("<li class='list-group-item mt-4'>");

    //             listItem.append(
    //                 $("<h2>").text("Table #" + (i + 1)),
    //                 $("<hr>"),
    //                 $("<h2>").text("ID: " + tableData[i].customerID),
    //                 $("<h2>").text("Name: " + tableData[i].customerName),
    //                 $("<h2>").text("Email: " + tableData[i].customerEmail),
    //                 $("<h2>").text("Phone: " + tableData[i].phoneNumber)
    //             )
    //             tableList.append(listItem)
    //         }

    //     })
$.get('/api/tables', (tableData) => {
        console.log(tableData);
        console.log("------------------------------------");

        for(let i = 0; i < tableData.length; i++) {
            const tableList = $("#tableList");
            const listItem = $("<li class='list-group-item mt-4'>");

            listItem.append(
                $("<h2>").text("Table #" + (i + 1)),
                $("<hr>"),
                $("<h2>").text("ID: " + tableData[i].customerID),
                $("<h2>").text("Name: " + tableData[i].customerName),
                $("<h2>").text("Email: " + tableData[i].customerEmail),
                $("<h2>").text("Phone: " + tableData[i].phoneNumber)
            )
            tableList.append(listItem)
        }
    
    })
}

const runWaitListQuery = () => {
    // $.ajax({ url: '/api/waitList', method: 'GET' })
    //     .then(waitData => {
    //         console.log(waitData);
    //         console.log('------------------------');
    //         for(let i = 0; i < waitData.length; i++){
    //             const waitList = $('#waitList');
    //             const listItem = $("<li class='list-group-item mt-4'>");

    //             listItem.append(
    //                 $("<h2>").text(`Table # ${i + 1}`),
    //                 $("<hr>"),
    //                 $("<h2>").text(`ID: ${waitData[i].customerID}`),
    //                 $("<h2>").text(`Name: ${waitData[i].customerName}`),
    //                 $("<h2>").text(`Email: ${waitData[i].customerEmail}`),
    //                 $("<h2>").text(`Phone: ${waitData[i].phoneNumber}`)
    //             );
    //             waitList.append(listItem)

    //         }
    //     })
    $.get('/api/waitlist', (waitData) => {
                    console.log(waitData);
            console.log('------------------------');
            for(let i = 0; i < waitData.length; i++){
                const waitList = $('#waitList');
                const listItem = $("<li class='list-group-item mt-4'>");

                listItem.append(
                    $("<h2>").text(`Table # ${i + 1}`),
                    $("<hr>"),
                    $("<h2>").text(`ID: ${waitData[i].customerID}`),
                    $("<h2>").text(`Name: ${waitData[i].customerName}`),
                    $("<h2>").text(`Email: ${waitData[i].customerEmail}`),
                    $("<h2>").text(`Phone: ${waitData[i].phoneNumber}`)
                );
                waitList.append(listItem)

            }

    })
}
const clearTable = () => {
    $.ajax({ url: '/api/clear', method: 'POST' })
        .then(() => {
            $("#waitList").empty();
            $("#tableList").empty();
        })
}
$('#clear').on('click', clearTable)

runTableQuery();
runWaitListQuery();