

//let family = new FamilyTree(document.getElementById("tree") );
/*
TODO:
FRAUEN : rot
Männer : blau

Add Partner, Pet

Bild

Flip
Minimize Maximae

submission

Darkmode ist in den details nicht vorhanden

 */

var family;

// Dark Mode Slider
function sliderFunc() {

    let settingsText = document.getElementById("settings-text");
    let settingsSlider = document.getElementById("settings-slider");

    /* Sprachen Slider */
    if (settingsSlider.checked == true) {
        settingsText.innerHTML = "Dunkel";
        settingsText.style.color = "white";
        modStatus = "dark";
        document.bgColor = "#1e1e1e";
        familyTreeFunc( "dark" );

    } else {
        settingsText.innerHTML = "Hell";
        modStatus = "light";
        settingsText.style.color = "black";
        document.bgColor = "#FFFFFF";
        familyTreeFunc( "light" );
    }
}

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

    FamilyTree.templates.tommy_female.defs = '<g transform="matrix(0.05,0,0,0.05,-12,-9)" id="heart"><path fill="#F57C00" d="M438.482,58.61c-24.7-26.549-59.311-41.655-95.573-41.711c-36.291,0.042-70.938,15.14-95.676,41.694l-8.431,8.909  l-8.431-8.909C181.284,5.762,98.663,2.728,45.832,51.815c-2.341,2.176-4.602,4.436-6.778,6.778 c-52.072,56.166-52.072,142.968,0,199.134l187.358,197.581c6.482,6.843,17.284,7.136,24.127,0.654 c0.224-0.212,0.442-0.43,0.654-0.654l187.29-197.581C490.551,201.567,490.551,114.77,438.482,58.61z"/><g>';
    FamilyTree.templates.tommy_male.defs = '<g transform="matrix(0.05,0,0,0.05,-12,-9)" id="heart"><path fill="#F57C00" d="M438.482,58.61c-24.7-26.549-59.311-41.655-95.573-41.711c-36.291,0.042-70.938,15.14-95.676,41.694l-8.431,8.909  l-8.431-8.909C181.284,5.762,98.663,2.728,45.832,51.815c-2.341,2.176-4.602,4.436-6.778,6.778 c-52.072,56.166-52.072,142.968,0,199.134l187.358,197.581c6.482,6.843,17.284,7.136,24.127,0.654 c0.224-0.212,0.442-0.43,0.654-0.654l187.29-197.581C490.551,201.567,490.551,114.77,438.482,58.61z"/><g>';


FamilyTree.elements.myTextArea = function (data, editElement, minWidth, readOnly) {
    var id = FamilyTree.elements.generateId();
    var value = data[editElement.binding];
    if (value == undefined) value = '';
    if (readOnly && !value) {
        return {
            html: ''
        };
    }
    var rOnlyAttr = readOnly ? 'readonly' : '';
    var rDisabledAttr = readOnly ? 'disabled' : '';
    return {
        html: `<br /><label for="${id}">${editElement.label}</label><br />
              <br /><textarea ${rDisabledAttr} ${rOnlyAttr} id="${id}" name="${id}" style="width: 100%;height: 100px;" data-binding="${editElement.binding}">${value}</textarea><br />`,
        id: id,
        value: value
    };

};



 // Show Family Tree
  function familyTreeFunc(modeStatus){

   family = new FamilyTree(document.getElementById("tree"), {
        // searchFields: ["name", "birthDate" ],
     //   template: "hugo",
   //     template: "partner",
    //    template: "pet",
        mode: modeStatus,

       nodeCircleMenu: {
           PDFProfile: {
               icon: FamilyTree.icon.pdf(30, 30, '#aeaeae'),
               text: "PDF Profile",
               color: "white"
           },

           editNode: {
               icon: FamilyTree.icon.edit(30, 30, '#aeaeae'),
               text: "Edit node",
               color: "white"
           },
           addClink: {
               icon: FamilyTree.icon.link(30, 30, '#aeaeae'),
               text: "Add C link",
               color: '#fff',
               draggable: true
           },
           pet: {
               icon: FamilyTree.icon.teddy(30, 30, '#aeaeae'),
               text: "Add pet",
               color: "white"
           }
       },

        // enableKeyNavigation: true,

          enableDragDrop: true,


        /* FILTER */
        filterBy: 'all',

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
                { type: 'textbox', label: 'Geschlecht', binding: 'gender', vlidators: { required: 'Erforderlich', name: 'Fehlerhaftes Geschlecht' }},
                { type: 'textbox', label: 'Bild', photoBinding: 'ImgUrl', btn: 'Upload'},
                { type: 'textbox', label: 'E-Mail', binding: 'Email'},
                { type: 'myTextArea', label: 'Beschreibung:', binding: 'desc' },
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
        mouseScrool: FamilyTree.action.zoom,
        nodeTreeMenu: true,
        // mouseScrool: FamilyTree.action.zoom,

        //    miniMap: true,

        /*
                editForm: {

            generateElementsFromFields: true,
            elements: [ // Elements show the Details
                { type: 'textbox', label: 'Voller Name', binding: 'name', vlidators: { required: 'Is required', name: 'Invalid name' }},
                { type: 'textbox', label: 'Titel', binding: 'title'},
                { type: 'date', label: 'Geburtstag', binding: 'bday'},
                { type: 'textbox', label: 'Email', binding: 'email'},
                { type: 'textbox', label: 'Foto Url', binding: 'img', btn: 'Upload'},
                { type: 'textbox', label: 'Text', binding: 'gerText'},
                //{ type: 'checkbox', label: 'lebt', binding: 'lebt'},
                { type: 'text', label: 'tags', binding: 'tags'},
                { type: 'textbox', label: 'id', binding: 'id'},
                { type: 'textbox', label: 'pid', binding: 'pid'},
            ]
        },

        */
        nodeBinding: {
            field_0: "name",
            field_1: "gender",
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

        /* Default Stammbaum */
        nodes: [
            { id: 1, pids: [2], name: "Mr. Patrick", gender: "Männlich", city: "Frankfurt", photo: 'https://cdn.balkan.app/shared/w60/1.jpg' },
            { id: 2, pids: [1], name: "Tabitha Liebling", gender: "Weiblich", ImgUrl: "f.jpg", city:" TEST"},
            { id: 3, mid: 1, fid: 2, name: "De Baby",gender: "Männlich", ImgUrl: 'https://cdn.balkan.app/shared/w60/1.jpg' }
        ],

    });

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

    family.on('render-link', function(sender, args){
        if (args.cnode.ppid != undefined)
            args.html += '<use data-ctrl-ec-id="' + args.node.id + '" xlink:href="#heart" x="' + (args.p.xb) + '" y="' + (args.p.ya ) +'"/>';
        if (args.cnode.isPartner && args.node.partnerSeparation == 30)
            args.html += '<use data-ctrl-ec-id="' + args.node.id + '" xlink:href="#heart" x="' + (args.p.xb) + '" y="' + (args.p.yb) +'"/>';

    });

// Family Node
      family.nodeCircleMenuUI.on('show', function (sender, args) {
          var node = family.getNode(args.nodeId);
          delete args.menu.father;
          delete args.menu.mother;
          delete args.menu.wife;
          delete args.menu.husband;
          if (FamilyTree.isNEU(node.mid)) {
              args.menu.mother = {
                  icon: FamilyTree.icon.mother(30, 30, '#F57C00'),
                  text: "Füge Mutter hinzu",
                  color: "white"
              };
          }
          if (FamilyTree.isNEU(node.fid)) {
              args.menu.father = {
                  icon: FamilyTree.icon.father(30, 30, '#039BE5'),
                  text: "Füge Vater hinzu",
                  color: "white"
              };
          }
          if (node.gender == 'male') {
              args.menu.wife = {
                  icon: FamilyTree.icon.wife(30, 30, '#F57C00'),
                  text: "Füge Ehefrau hinzu",
                  color: "white"
              };
          }
          else if (node.gender == 'female') {
              args.menu.husband = {
                  icon: FamilyTree.icon.husband(30, 30, '#F57C00'),
                  text: "Füge Ehemann hinzu",
                  color: "white"
              };
          }
          else {
              args.menu.son = {
                  icon: FamilyTree.icon.son(30, 30, '#F57C00'),
                  text: "Füge Sohn hinzu",
                  color: "white"
              };
              args.menu.daughter = {
                  icon: FamilyTree.icon.daughter(30, 30, '#039BE5'),
                  text: "Füge Tochter hinzu",
                  color: "white"
              };
          }

      });

      family.nodeCircleMenuUI.on('click', function (sender, args) {
          var node = family.getNode(args.nodeId);

          switch (args.menuItemName) {
              case "husband":
                  family.addPartnerNode({ gender: 'male', pids: [args.nodeId] });
                  break;
              case "wife":
                  family.addPartnerNode({ gender: 'female', pids: [args.nodeId] });
                  break;
              case "pet":
                  family.addPartnerNode({ gender: 'pet', pids: [args.nodeId] });
                  break;
              case "mother":
                  var data = { gender: 'female' };
                  if (!FamilyTree.isNEU(node.fid)) {
                      data.pids = [node.fid];
                  }
                  family.addParentNode(args.nodeId, 'mid', data);
                  break;
              case "father":
                  var data = { gender: 'male' };
                  if (!FamilyTree.isNEU(node.mid)) {
                      data.pids = [node.mid];
                  }
                  family.addParentNode(args.nodeId, 'fid', data);
                  break;
              case "son":
                  family.addChildNode({ gender: 'male', pids: [args.nodeId] });
                  break;
              case "daughter":
                  family.addChildNode({ gender: 'female', pids: [args.nodeId] });
                  break;
              case "PDFProfile":
                  family.exportPDFProfile({
                      id: args.nodeId
                  });
                  break;
              case "editNode": family.editUI.show(args.nodeId);
                  break;
              default:
          };
      });

      family.nodeCircleMenuUI.on('drop', function (sender, args) {
          family.addClink(args.from, args.to).draw(FamilyTree.action.update);
      });

      family.nodeCircleMenuUI.on('mouseenter', function (sender, args) {
          if (args.menuItem.text == "Remove node") {
              var node = document.querySelector('[data-n-id="' + args.from + '"]');
              node.style.opacity = 0.5;
          }
      });

      family.nodeCircleMenuUI.on('mouseout', function (sender, args) {
          var node = document.querySelector('[data-n-id="' + args.from + '"]');
          node.style.opacity = 1;
      });





  }// End FamilyTreeFunc


FamilyTree.templates.tommy.nodeCircleMenuButton =
    FamilyTree.templates.tommy_female.nodeCircleMenuButton = FamilyTree.templates.tommy_male.nodeCircleMenuButton = {
        radius: 25,
        x: 230,
        y: 60,
        color: '#fff',
        stroke: '#aeaeae'
    }; // Kreis Ergänzung




//    FamilyTree.templates.tommy_male.img_0 =
    //       '<image preserveAspectRatio="xMidYMid slice" xlink:href="{val}" x="20" y="-15" width="80" height="80"></image>';



//    FamilyTree.templates.tommy_male.img_0 =
    //       '<image preserveAspectRatio="xMidYMid slice" xlink:href="{val}" x="20" y="-15" width="80" height="80"></image>';


