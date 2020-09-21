function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6RXC8pBLrNo":
        Script1();
        break;
      case "5vQHwuMJrPm":
        Script2();
        break;
      case "6bYuVgUxbuJ":
        Script3();
        break;
      case "6iCDfDuy6s4":
        Script4();
        break;
      case "6dzAPWtAKKX":
        Script5();
        break;
      case "5iLTf5uPiBo":
        Script6();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  window.print();
}

