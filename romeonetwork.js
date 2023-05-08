

  //initilize svg or grab svg
  var svg = d3.select("svg");
  var width = svg.attr("width");
  var height = svg.attr("height");
  var color = d3.scaleOrdinal(d3.schemeCategory20b);
 
 
  //intialize data
  var graph = {
    nodes: [
    { name: "ROMEO", group:"blueone", size:"55.1473922902494",color:"rgb(156, 158, 222)"},
{ name: "MONTAGUE", group:"bluetwo", size:"22.2675736961451",color:"rgb(82, 84, 163)"},
// { name: "LADY MONTAGUE", group:"bluetwo"},
// { name: "BENVOLIO", group:"bluethree"},
// { name: "ABRAHAM", group:"bluefour"},
{ name: "BALTHASAR", group:"bluefour", size:"27.2562358276644",color:"rgb(82, 84, 163)"},
{ name: "PRINCE", group:"greenone", size:"28.390022675737", color:"	rgb(140, 162, 82)"},
{ name: "PARIS", group:"greentwo", size:"27.4829931972789",color:"	rgb(181, 207, 107)"},
// { name: "MERCUTIO", group:"greenthree"},
{ name: "PAGE", group:"greenfour", size:"22.0408163265306",color:"rgb(181, 207, 107)"},
{ name: "FRIAR JOHN", group:"yellowone", size:"22.9478458049887", color:"rgb(231, 203, 148)"},
{ name: "First Watchman", group:"yellowtwo", size:"24.3083900226757", color:"rgb(231, 203, 148)"},
{ name: "Second Watchman", group:"yellowtwo", size:"20.2267573696145", color:"rgb(231, 203, 148)"},
// { name: "First Musician", group:"yellowtwo"},
// { name: "Second Musician", group:"yellowtwo"},
// { name: "First Citizen", group:"yellowtwo"},
{ name: "Third Watchman", group:"yellowtwo", size:"20.6802721088435", color:"rgb(231, 203, 148)"},
// { name: "Third Musician", group:"yellowtwo"},
// { name: "Musician", group:"yellowtwo"},
// { name: "RICHMOND", group:"yellowthree"},
// { name: "Chorus", group:"yellowthree"},
{ name: "AUDIENCE", group:"yellowfour", size:"20", color:"	rgb(211, 211, 211)"},
{ name: "JULIET", group:"redone", size:"23.1746031746032", color:"pink"},
{ name: "CAPULET", group:"redtwo", size:"22.2675736961451", color:"	rgb(214, 97, 107)"},
{ name: "LADY CAPULET", group:"redtwo", size:"21.1337868480726", color:"	rgb(214, 97, 107)"},
// { name: "TYBALT", group:"redthree"},
// { name: "Second Capulet", group:"redthree"},
// { name: "First Servant", group:"redfour"},
// { name: "Second Servant", group:"redfour"},
// { name: "SAMPSON", group:"redfour"},
// { name: "GREGORY", group:"redfour"},
// { name: "PETER", group:"redfour"},
// { name: "Servant", group:"redfour"},
// { name: "Nurse", group:"redfour"},
{ name: "FRIAR LAURENCE", group:"purpleone", size:"41.0884353741497", color:"rgb(222, 158, 214)"},
{ name: "Apothecary", group:"purpletwo", size:"21.5873015873016", color:"rgb(206, 109, 189)"}
],
    links: [
    { source: "ROMEO", target: "BALTHASAR"},
{ source: "BALTHASAR", target: "ROMEO"},
{ source: "ROMEO", target: "BALTHASAR"},
{ source: "BALTHASAR", target: "ROMEO"},
{ source: "ROMEO", target: "BALTHASAR"},
{ source: "BALTHASAR", target: "ROMEO"},
{ source: "ROMEO", target: "Apothecary"},
{ source: "Apothecary", target: "ROMEO"},
{ source: "ROMEO", target: "Apothecary"},
{ source: "Apothecary", target: "ROMEO"},
{ source: "ROMEO", target: "Apothecary"},
{ source: "Apothecary", target: "ROMEO"},
{ source: "ROMEO", target: "Apothecary"},
{ source: "Apothecary", target: "ROMEO"},
{ source: "ROMEO", target: "FRIAR JOHN"},
{ source: "FRIAR JOHN", target: "FRIAR LAURENCE"},
{ source: "FRIAR LAURENCE", target: "FRIAR JOHN"},
{ source: "FRIAR JOHN", target: "FRIAR LAURENCE"},
{ source: "FRIAR LAURENCE", target: "FRIAR JOHN"},
{ source: "FRIAR JOHN", target: "FRIAR LAURENCE"},
{ source: "FRIAR LAURENCE", target: "FRIAR JOHN"},
{ source: "FRIAR JOHN", target: "FRIAR LAURENCE"},
{ source: "FRIAR LAURENCE", target: "PARIS"},
{ source: "PARIS", target: "PAGE"},
{ source: "PAGE", target: "PARIS"},
{ source: "PARIS", target: "PARIS"},
{ source: "PARIS", target: "ROMEO"},
{ source: "ROMEO", target: "BALTHASAR"},
{ source: "BALTHASAR", target: "ROMEO"},
{ source: "ROMEO", target: "BALTHASAR"},
{ source: "BALTHASAR", target: "ROMEO"},
{ source: "ROMEO", target: "PARIS"},
{ source: "PARIS", target: "ROMEO"},
{ source: "ROMEO", target: "PARIS"},
{ source: "PARIS", target: "ROMEO"},
{ source: "ROMEO", target: "PAGE"},
{ source: "PAGE", target: "PARIS"},
{ source: "PARIS", target: "PARIS"},
{ source: "PARIS", target: "ROMEO"},
{ source: "ROMEO", target: "FRIAR LAURENCE"},
{ source: "FRIAR LAURENCE", target: "BALTHASAR"},
{ source: "BALTHASAR", target: "FRIAR LAURENCE"},
{ source: "FRIAR LAURENCE", target: "BALTHASAR"},
{ source: "BALTHASAR", target: "FRIAR LAURENCE"},
{ source: "FRIAR LAURENCE", target: "BALTHASAR"},
{ source: "BALTHASAR", target: "FRIAR LAURENCE"},
{ source: "FRIAR LAURENCE", target: "BALTHASAR"},
{ source: "BALTHASAR", target: "FRIAR LAURENCE"},
{ source: "FRIAR LAURENCE", target: "BALTHASAR"},
{ source: "BALTHASAR", target: "FRIAR LAURENCE"},
{ source: "FRIAR LAURENCE", target: "BALTHASAR"},
{ source: "BALTHASAR", target: "FRIAR LAURENCE"},
{ source: "FRIAR LAURENCE", target: "JULIET"},
{ source: "JULIET", target: "FRIAR LAURENCE"},
{ source: "FRIAR LAURENCE", target: "JULIET"},
{ source: "JULIET", target: "First Watchman"},
{ source: "First Watchman", target: "JULIET"},
{ source: "JULIET", target: "PAGE"},
{ source: "PAGE", target: "First Watchman"},
{ source: "First Watchman", target: "Second Watchman"},
{ source: "Second Watchman", target: "First Watchman"},
{ source: "First Watchman", target: "Third Watchman"},
{ source: "Third Watchman", target: "First Watchman"},
{ source: "First Watchman", target: "PRINCE"},
{ source: "PRINCE", target: "CAPULET"},
{ source: "CAPULET", target: "LADY CAPULET"},
{ source: "LADY CAPULET", target: "PRINCE"},
{ source: "PRINCE", target: "First Watchman"},
{ source: "First Watchman", target: "PRINCE"},
{ source: "PRINCE", target: "First Watchman"},
{ source: "First Watchman", target: "CAPULET"},
{ source: "CAPULET", target: "LADY CAPULET"},
{ source: "LADY CAPULET", target: "PRINCE"},
{ source: "PRINCE", target: "MONTAGUE"},
{ source: "MONTAGUE", target: "PRINCE"},
{ source: "PRINCE", target: "MONTAGUE"},
{ source: "MONTAGUE", target: "PRINCE"},
{ source: "PRINCE", target: "FRIAR LAURENCE"},
{ source: "FRIAR LAURENCE", target: "PRINCE"},
{ source: "PRINCE", target: "FRIAR LAURENCE"},
{ source: "FRIAR LAURENCE", target: "PRINCE"},
{ source: "PRINCE", target: "BALTHASAR"},
{ source: "BALTHASAR", target: "PRINCE"},
{ source: "PRINCE", target: "PAGE"},
{ source: "PAGE", target: "PRINCE"},
{ source: "PRINCE", target: "CAPULET"},
{ source: "CAPULET", target: "MONTAGUE"},
{ source: "MONTAGUE", target: "CAPULET"},
{ source: "CAPULET", target: "PRINCE"},
{ source: "PRINCE", target: "AUDIENCE"}
    ]
  };
// var myColor =d3.scaleOrdinal().domain(node)
// .range(["red","blue","red","blue","red","blue","red","blue","red","blue","red","blue","red","blue","red","blue"])

  var simulation = d3
    .forceSimulation(graph.nodes)
    .force(
      "link",
      d3
        .forceLink()
        .id(function(d) {
          return d.name;
        })
        .links(graph.links)
    )
    .force("gravity",gravity(-100))
  

    .force("charge", d3.forceManyBody().strength(-1000))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .on("tick", ticked);

  var link = svg
    .append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter()
    .append("line")
    .attr("stroke-width", function(d) {
      return 10;
    });
    var drag = 
      d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);


var textandnode = svg
  .append("g")
  .selectAll("g")
  .data(graph.nodes)
  .enter()
  .append("g")
  .call(drag)
  ;

var circles = textandnode
.append("circle")
.attr("r", (d)=>d.size)
//.attr("r", "20")
//.attr("fill", function(d){
  //return color(d.group);
//})
.attr("fill", (d)=>d.color)
;

var texts = textandnode
.append("text")
.text(function(d){return d.name});

  // var node = svg
  //   .append("g")
  //   .attr("class", "nodes")
  //   .selectAll("circle")
  //   .data(graph.nodes)
  //   .enter()
  //   .append("circle")
  //   .attr("r", 10)
  //   .attr("fill", "red");

    // var drag = 
    //   d3
    //     .drag()
    //     .on("start", dragstarted)
    //     .on("drag", dragged)
    //     .on("end", dragended);
//node.call(drag);
  

 
  // nodes.append("text")
  // .text(function(d){
  //   return d.name;
  // })
  // .style("fill","#000")
  // .style("font-size", "20px")
  // .attr("x",6)
  // .attr("y",3);

// simulation.force(
//   'link',
//   d3.forceLink().id((link)=>link.id)
//   .strength((link)=>link.strength)
// );
// const linkElements = svg
// .append('g')
// .selectAll('line')
// .data(links)
// .enter()
// .append('line')
// .attr('stroke-width',1)
// .attr('stroke','#E5E5E5')
// .attr('x1',(link) => link.source.x)
// .attr('y1',(link) => link.source.y)
// .attr('x2',(link) => link.target.x)
// .attr('y2',(link) => link.target.y);

//simulation.force('link').link(links);
  function ticked() {
    textandnode.attr("transform", function(d){
      return "translate("+d.x+","+d.y+")";
    });
    link
      .attr("x1", function(d) {
        return d.source.x;
      })
      .attr("y1", function(d) {
        return d.source.y;
      })
      .attr("x2", function(d) {
        return d.target.x;
      })
      .attr("y2", function(d) {
        return d.target.y;
      });
    
  //   node
  //     .attr("cx", function(d) {
  //       return d.x;
  //     })
  //     .attr("cy", function(d) {
  //       return d.y;
  //     });
  // 
}

  function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
 function gravity(alpha){
  return function(d){
    d.y+=(d.cy -d.y)*alpha;
    d.x +=(d.cx-d.x)*alpha;
  };
 }
 


