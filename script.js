
// Button CSV Upload | Download
function downUpCSV(upDownStatus){

    if (upDownStatus)
        family.importCSV();
    else
        family.exportCSV();
}





    /* HERZ */
    FamilyTree.templates.tommy_male.plus =
        '<circle cx="0" cy="0" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>'
        + '<line x1="-11" y1="0" x2="11" y2="0" stroke-width="1" stroke="#aeaeae"></line>'
        + '<line x1="0" y1="-11" x2="0" y2="11" stroke-width="1" stroke="#aeaeae"></line>';
    FamilyTree.templates.tommy_male.minus =
        '<circle cx="0" cy="0" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>'
        + '<line x1="-11" y1="0" x2="11" y2="0" stroke-width="1" stroke="#aeaeae"></line>';
    FamilyTree.templates.tommy_female.plus =
        '<circle cx="0" cy="0" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>'
        + '<line x1="-11" y1="0" x2="11" y2="0" stroke-width="1" stroke="#aeaeae"></line>'
        + '<line x1="0" y1="-11" x2="0" y2="11" stroke-width="1" stroke="#aeaeae"></line>';
    FamilyTree.templates.tommy_female.minus =
        '<circle cx="0" cy="0" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>'
        + '<line x1="-11" y1="0" x2="11" y2="0" stroke-width="1" stroke="#aeaeae"></line>';
    FamilyTree.templates.tommy_female.defs = '<g transform="matrix(0.05,0,0,0.05,-12,-9)" id="heart"><path fill="#2bad28" d="M438.482,58.61c-24.7-26.549-59.311-41.655-95.573-41.711c-36.291,0.042-70.938,15.14-95.676,41.694l-8.431,8.909  l-8.431-8.909C181.284,5.762,98.663,2.728,45.832,51.815c-2.341,2.176-4.602,4.436-6.778,6.778 c-52.072,56.166-52.072,142.968,0,199.134l187.358,197.581c6.482,6.843,17.284,7.136,24.127,0.654 c0.224-0.212,0.442-0.43,0.654-0.654l187.29-197.581C490.551,201.567,490.551,114.77,438.482,58.61z"/><g>';
    FamilyTree.templates.tommy_male.defs = '<g transform="matrix(0.05,0,0,0.05,-12,-9)" id="heart"><path fill="#FF0000" d="M438.482,58.61c-24.7-26.549-59.311-41.655-95.573-41.711c-36.291,0.042-70.938,15.14-95.676,41.694l-8.431,8.909  l-8.431-8.909C181.284,5.762,98.663,2.728,45.832,51.815c-2.341,2.176-4.602,4.436-6.778,6.778 c-52.072,56.166-52.072,142.968,0,199.134l187.358,197.581c6.482,6.843,17.284,7.136,24.127,0.654 c0.224-0.212,0.442-0.43,0.654-0.654l187.29-197.581C490.551,201.567,490.551,114.77,438.482,58.61z"/><g>';


    /* Suche */
    FamilyTree.SEARCH_PLACEHOLDER = "Suche";

    /* Custom Template */
    FamilyTree.templates.tommy_female.field_0 =
        '<text width="230" style="font-size: 18px;" fill="#ffffff" x="125" y="95" text-anchor="middle" class="field_0">{val}</text>';
    FamilyTree.templates.tommy_female.field_1 =
        '<text data-width="130" data-text-overflow="multiline" style="font-size: 14px;" fill="#ffffff" x="230" y="30" text-anchor="end" class="field_1">{val}</text>';
    FamilyTree.templates.tommy_male.field_0 =
        '<text width="230" style="font-size: 18px;" fill="#ffffff" x="125" y="95" text-anchor="middle" class="field_0">{val}</text>';
    FamilyTree.templates.tommy_male.field_1 =
        '<text data-width="130" data-text-overflow="multiline" style="font-size: 14px;" fill="#ffffff" x="230" y="30" text-anchor="end" class="field_1">{val}</text>';


    var family = new FamilyTree(document.getElementById('tree'), {



        /* Config */
         template: "hugo",
        enableDragDrop: true,
        nodeTreeMenu: true,
        miniMap: true,
        searchFields: ["name", "birthDate", ], // TODO MEHR WÄHLEN
        toolbar: {
            fullScreen: true,
            zoom: true,
            fit: true,
            expandAll: true
        },
      // filterBy: 'all', /// TODO WAS DAMIT MACHEN ?




        nodeBinding: {
            field_0: "name",
            field_1: "age",
            field_2: "name",
            field_3: "name",
            img_0: "photo",
            img_1: "photo"
        },
        editForm: {
            generateElementsFromFields: true,
            cancelBtn: 'Abbrechen',
            saveAndCloseBtn: 'Speichern',
            buttons:
                {
                    edit:
                        {
                            icon: FamilyTree.icon.edit(24,24,'#fff'),
                            text: 'Bearbeiten',
                            hideIfEditMode: true,
                            hideIfDetailsMode: false
                        },
                    share: null,
                    pdf:
                        {
                            icon: FamilyTree.icon.pdf(24,24,'#fff'),
                            text: 'Speicher als PDF'
                        },
                },

            elements: [
                { type: 'textbox', label: 'Full Name', binding: 'name', vlidators: { required: 'Erforderlich', name: 'Fehlerhafter Name' }},
                { type: 'textbox', label: 'Geburtsname', binding: 'Geburtsname'},
                { type: 'textbox', label: 'Bild', photoBinding: 'ImgUrl', btn: 'Upload'},
                { type: 'textbox', label: 'E-Mail', binding: 'Email'},
             //   { type: 'myTextArea', label: 'Beschreibung:', binding: 'desc' },
                { type: 'date', label: 'Geburtstag', binding: 'sdate'},
                { type: 'checkbox', label: 'Verstorben', binding: 'active' },


                { type: 'date', label: 'Todestag', binding: 'tdate' },
                // myTextArea

                { type: 'select', options: [
                        {value: 'bg', text: 'Bulgaria'},
                        {value: 'ru', text: 'Russia'}],
                    label: 'Country', binding: 'country' },
            ]
        },

        /* Menü Neben der Suche */
        menu: {
            pdf: { text: "Speicher PDF" },
            png: { text: "Speicher PNG" },
            svg: { text: "Speicher SVG" },
            csv: { text: "Speicher CSV" }
        },

        /* Menü der Personen */
        nodeMenu: {
            details: { text: "Details" },
            edit: { text: "Bearbeiten" },
            pdf: { text: "Speicher PDF" },
            png: { text: "Speicher PNG" },
            csv: { text: "Speicher CSV" },
            remove: {text:"Löschen"}
        },



    }); // End of deklaration Family

    function getAge(d1, d2){
        d2 = d2 || new Date();
        var diff = d2.getTime() - d1.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }



    family.on('field', function(sender, args){
        if (args.name == "age") {
            var bd = args.data["birthDate"];
            let dead = false;
            if ( args.data["deathDate"] === undefined )
            {
                var dd =  Date( "year", "day" ,"month");
                //      var dd = date();
            }
            else {
                dead = true;
                var dd = args.data["deathDate"];
            }
            var bdate = new Date(bd);
            var ddate = new Date(dd);
            var age = getAge(bdate, ddate);
            (dead)? args.value = "✝" + age : args.value = age;

        }

    });


    family.on('field', function(sender, args){
        if (args.name == "name") {
            if ( args.data['spitzname'] != undefined )
                args.value = args.data["name"] + " (" + args.data["spitzname"] + ")";
            else
                args.value = args.data["name"];
        }



    });





/* Default Stammbaum */
    family.load(
        [
            { id: 0, pids: [1], gender: 'male', name: 'Yuriy Gusev', spitzname: "yuri", birthDate: '1867-09-16', deathDate: '1922-06-29', age: 0, photo: 'https://cdn.balkan.app/shared/m60/1.jpg', city: "Nizhniy Novgorod", country: "Russia" },
            { id: 1, pids: [0], gender: 'female', name: 'Nastya Pushkina', birthDate: '1873-07-03', deathDate: '1933-05-05', age: 0, photo: 'https://cdn.balkan.app/shared/w60/1.jpg', city: "Nizhniy Novgorod", country: "Russia" },
            { id: 2, pids: [3], gender: 'female', name: 'Agnessa Semenova', fid: 0, mid: 1, birthDate: '1979-05-03', age: 0, photo: 'https://cdn.balkan.app/shared/w60/2.jpg', city: "Krasnodar", country: "Russia" },
        ]
    );

    /* HERZ */
    family.on('expcollclick', function (sender, isCollapsing, nodeId) {
        var node = family.getNode(nodeId);
        if (isCollapsing){
            family.expandCollapse(nodeId, [], node.ftChildrenIds)
        }
        else{
            family.expandCollapse(nodeId, node.ftChildrenIds, [])
        }
        return false;
    });


    /* TODO
family.editUI.on('element-btn-click', function(sender, args){
    FamilyTree.fileUploadDialog(args.input, function(file){
        var formData = new FormData();
        formData.append('file', file);
        $.ajax({
            type: "POST",
            url: "@Url.Action('UploadImage')",
            data: formData,
            dataType: 'jpg',
            contentType: false,
            processData: false,
            success: function (data) {
                input.value = data.url;
            },
            error: function (error) {
                alert(error);
            }
        });
    });
});
*/



    family.on('render-link', function(sender, args){
        if (args.cnode.ppid != undefined)
            args.html += '<use data-ctrl-ec-id="' + args.node.id + '" xlink:href="#heart" x="' + (args.p.xb) + '" y="' + (args.p.ya ) +'"/>';
        if (args.cnode.isPartner && args.node.partnerSeparation == 30)
            args.html += '<use data-ctrl-ec-id="' + args.node.id + '" xlink:href="#heart" x="' + (args.p.xb) + '" y="' + (args.p.yb) +'"/>';
    });


    /*

        family.load(
            [
                { id: 0, pids: [1], gender: 'male', name: 'Yuriy Gusev', spitzname: "yuri", birthDate: '1867-09-16', deathDate: '1922-06-29', age: 0, photo: 'https://cdn.balkan.app/shared/m60/1.jpg', city: "Nizhniy Novgorod", country: "Russia" },
                { id: 1, pids: [0], gender: 'female', name: 'Nastya Pushkina', birthDate: '1873-07-03', deathDate: '1933-05-05', age: 0, photo: 'https://cdn.balkan.app/shared/w60/1.jpg', city: "Nizhniy Novgorod", country: "Russia" },
                { id: 2, pids: [3], gender: 'female', name: 'Agnessa Semenova', fid: 0, mid: 1, birthDate: '1909-05-03', age: 0, deathDate: '1992-05-20', photo: 'https://cdn.balkan.app/shared/w60/2.jpg', city: "Krasnodar", country: "Russia" },
                { id: 3, pids: [2], gender: 'male', name: 'Isai Vasiliev', birthDate: '1907-06-22', deathDate: '1987-11-20', age: 0, photo: 'https://cdn.balkan.app/shared/m60/2.jpg', city: "Krasnodar", country: "Russia" },
                { id: 4, pids: [5], gender: 'male', name: 'Yermolai Kozlov', fid: 3, mid: 2, birthDate: '1940-05-13', age: 0, photo: 'https://cdn.balkan.app/shared/m60/3.jpg', address: "Neybuta, bld. 57, appt. 336", city: "Primorskiy kray", phone: "+7(4232)14-90-18", country: "Russia" },
                { id: 5, pids: [4], gender: 'female', name: 'Julija Popova', fid: 21, mid: 22, birthDate: '1942-10-02', age: 0, photo: 'https://cdn.balkan.app/shared/w60/3.jpg', address: "Neybuta, bld. 57, appt. 336", city: "Primorskiy kray", phone: "+7(861)166-92-10", country: "Russia" },
                { id: 6, pids: [10, 11], gender: 'male', name: 'Savin Makarov', fid: 4, mid: 5, birthDate: '1964-11-21', age: 0, photo: 'https://cdn.balkan.app/shared/m30/1.jpg', address: "Tankista Belorossova Ul., bld. 2, appt. 51", city: "Ivanovo", phone: "+7(4932)86-83-67", country: "Russia" },
                { id: 7, gender: 'female', name: 'Ekaterina Fedoroa', fid: 4, mid: 5, birthDate: '1965-03-15', age: 0, photo: 'https://cdn.balkan.app/shared/w30/1.jpg', address: "Ul Krasilnikova, bld. 24", city: "Kemerovo", phone: "+7(3842)45-38-84", country: "Russia" },
                { id: 10, pids: [6], gender: 'female', name: 'Efrosinia Sorokina', birthDate: '1977-03-03', age: 0, photo: 'https://cdn.balkan.app/shared/w30/2.jpg', address: "Lenina, bld. 175/1, appt. 43", city: "Rostov-na-donu", phone: "+7(863)354-67-14", country: "Russia" },
                { id: 11, pids: [6], gender: 'female', name: 'Gulistanskiy Baranova', birthDate: '1979-04-26', age: 0, photo: 'https://cdn.balkan.app/shared/w30/3.jpg', address: "Surkova, bld. 14, appt. 52", city: "Chelyabinsk", phone: "+7(351)121-01-17", country: "Russia" },
                { id: 19, pids: [20], gender: 'male', name: 'Yasha Nikitin', birthDate: '1893-06-05', age: 0, photo: 'https://cdn.balkan.app/shared/m60/4.jpg', city: "Shelekhov", country: "Russia" },
                { id: 20, pids: [19], gender: 'female', name: 'Polina Guseva', birthDate: '1891-09-19', age: 0, photo: 'https://cdn.balkan.app/shared/w60/4.jpg', city: "Shelekhov", country: "Russia" },
                { id: 21, pids: [22], gender: 'male', name: 'Samuil Kozlov', fid: 19, mid: 20, birthDate: '1921-07-14', age: 0, photo: 'https://cdn.balkan.app/shared/m60/5.jpg', city: "Krasnoyarsk", country: "Russia" },
                { id: 22, pids: [21], gender: 'female', name: 'Borbala Morozova', birthDate: '1933-11-02', age: 0, photo: 'https://cdn.balkan.app/shared/w60/5.jpg', city: "Krasnoyarsk", country: "Russia" }
            ]
        );
    */
