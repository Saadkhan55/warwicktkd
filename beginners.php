<!DOCTYPE html>
<html lang="en">
  <head>
    <!--Add header data (such as import stylesheets) -->
    <?php include 'php/head.php' ?>
    <title>Beginners</title>
  </head>
  <body>
    <div id="wrapper">
      <!--Add header including logo, and navbar elements -->
      <?php include 'php/header.php' ?>
      <div class="container">
        <div class="row">
          <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

            <div class="panel panel-default">
              <div class="panel-heading" role="tab" id="headingOne">
                <h4 class="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <i class="fa fa-plus"></i>  <i class="fa fa-minus"></i>What Is Tae Kwon Do? 
                  </a>
                </h4>
              </div>
              <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                <div class="panel-body">
                  <p class="larger-font">
                    Tae Kwon Do is a korean martial art that has a heavy emphasis on kicking. It is a mainly a striking and blocking system, although grabs and throws are introduce to advanced colour belts. This means that classes can be physically intensive and a higher demand is placed on the students fitness as they progress. As a new student, you will be instructed in a way as to improve your fitness to be able to achieve this
                  </p>
                </div>
              </div>
            </div> <!-- End of panel -->

          </div> <!-- End of panel group -->
        </div> <!-- End of row -->
      </div> <!-- End of container -->

      <div class="tab-panels" role="tabpanel">
        <div class="container">
          <div class="row">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active"><a href="#Patterns" aria-controls="Patterns" role="tab" data-toggle="tab">Patterns</a></li>
              <li role="presentation"><a href="#SetSparring" aria-controls="SetSparring" role="tab" data-toggle="tab">Set Sparring</a></li>
              <li role="presentation"><a href="#LineWork" aria-controls="LineWork" role="tab" data-toggle="tab">Line Work</a></li>
              <li role="presentation"><a href="#Sparring" aria-controls="Sparring" role="tab" data-toggle="tab">Sparring</a></li>
            </ul> <!-- Navbar linking to tabs -->

            <!-- tab panels  -->
            <div class="tab-content">

              <div role="tabpanel" class="tab-pane fade in active" id="Patterns">
                <p class="larger-font">
                  A memorised sequence of moves, a pattern is a simulated fight against imaginary enemies which trains your muscles to perform techniques in a natural flowing way. Although they may seem impractical, they do condition your body and improve control.
                </p>
              </div> <!-- End of tab panel -->

              <div role="tabpanel" class="tab-pane fade " id="SetSparring">
                <p class="larger-font">
                  This is a sequence of pre-arranged moves between two people in which one person attacks whilst the other defends. This is used to practise proper execution of blocks and attacks against an opponent with minimal risk of injury.
                </p>

            </div> <!-- End of tab panel -->

              <div role="tabpanel" class="tab-pane fade" id="LineWork">
                <p class="larger-font">
                  A great way to practise specific Tae Kwon Do techniques, usually involves moving fowards and backwards doing a set move or combination attacking 'air'.
                </p>
               </div> <!-- End of tab panel -->

              <div role="tabpanel" class="tab-pane fade" id="Sparring">
                <p class="larger-font">
                  Normally consists of 2 minute rounds between two combatants. Two common types of free sparring are point-stop (where the match is paused by a referee whenever a point is scored) or continuous. Competition sparring scoring can vary, but the rules are usually fairly similiar (2 or 3 points for a kick, and 1 for a hand technique). Free sparring is effectively a controlled fight in which clean techniques are rewarding with points.
                </p>
              </div> <!-- End of tab panel -->

            </div> <!-- End of tab content -->
          </div> <!-- End of container -->
        </div> <!-- End of row -->
      </div> <!-- End of tab panel -->

    </div><!--End of wrapper -->
    <!--Add footer, contains 3 columns layout Add footer data, such as jquery, boostrap javascript -->
    <?php include 'php/footer.php' ?>
    <script src="js/accordion.js"></script> <!-- Changes class to add plus and minus effect on accordion when open/closed -->
  </body>
</html>

