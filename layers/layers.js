var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'หน่วยงานกรมประมง',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> หน่วยงานกรมประมง'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__1];
lyr__1.set('fieldAliases', {'div_doccod': 'div_doccod', 'Type': 'Type', 'Name': 'Name', 'Shortname': 'Shortname', 'Lat': 'Lat', 'Long': 'Long', 'Address': 'Address', 'SubDistric': 'SubDistric', 'District': 'District', 'Province': 'Province', 'IDFarm01': 'IDFarm01', 'IDFarm02': 'IDFarm02', 'Go_to_goog': 'Go_to_goog', });
lyr__1.set('fieldImages', {'div_doccod': 'TextEdit', 'Type': 'TextEdit', 'Name': 'TextEdit', 'Shortname': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Address': 'TextEdit', 'SubDistric': 'TextEdit', 'District': 'TextEdit', 'Province': 'TextEdit', 'IDFarm01': 'TextEdit', 'IDFarm02': 'TextEdit', 'Go_to_goog': 'TextEdit', });
lyr__1.set('fieldLabels', {'div_doccod': 'hidden field', 'Type': 'hidden field', 'Name': 'inline label - visible with data', 'Shortname': 'inline label - visible with data', 'Lat': 'hidden field', 'Long': 'hidden field', 'Address': 'inline label - visible with data', 'SubDistric': 'inline label - visible with data', 'District': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'IDFarm01': 'hidden field', 'IDFarm02': 'hidden field', 'Go_to_goog': 'hidden field', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});