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
                    <i class="fa fa-plus"></i>  <i class="fa fa-minus"></i>Collapsible Group Item #1 
                  </a>
                </h4>
              </div>
              <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div> <!-- End of panel -->

            <div class="panel panel-default">
              <div class="panel-heading" role="tab" id="headingTwo">
                <h4 class="panel-title">
                  <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <i class="fa fa-plus"></i> <i class="fa fa-minus"></i> Collapsible Group Item #2 
                  </a>
                </h4>
              </div>
              <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div> <!--End of panel-->

            <div class="panel panel-default">
              <div class="panel-heading" role="tab" id="headingThree">
                <h4 class="panel-title">
                  <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <i class="fa fa-plus"></i> <i class="fa fa-minus"></i>Collapsible Group Item #3 
                  </a>
                </h4>
              </div>
              <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin fringilla justo ut dictum. Donec dignissim dui tortor, ac vulputate justo tincidunt vitae. Aenean risus dui, porttitor et lectus vel, ornare vulputate lectus. Quisque dolor lorem, molestie non urna et, aliquet suscipit mi. Maecenas leo eros, venenatis nec blandit et, egestas quis mauris. Duis vitae magna dictum leo ultricies commodo. In tincidunt venenatis elementum.

                Nulla ac interdum est, vitae elementum risus. Pellentesque tortor mauris, vestibulum at magna ut, aliquam malesuada augue. Suspendisse eleifend sapien magna, feugiat interdum urna iaculis nec. Donec sed urna sed tortor varius scelerisque. Morbi feugiat sem non bibendum ultricies. Praesent volutpat lectus in mi suscipit ornare. Integer id orci sed est cursus vestibulum. Suspendisse eget quam efficitur diam ornare aliquam et in urna. Vivamus at consectetur lectus. Nunc aliquet sollicitudin egestas. Phasellus scelerisque sem sit amet justo tempor, eget vehicula ante efficitur. Sed ac ornare augue, vitae posuere quam. Sed non porttitor justo, nec posuere felis. Fusce sem est, molestie id posuere sit amet, ullamcorper sed est. Fusce eget sodales ipsum, et euismod enim.
              </div> <!-- End of tab panel -->

              <div role="tabpanel" class="tab-pane fade " id="SetSparring">
               Curabitur suscipit tristique sem sit amet rhoncus. Duis eu ultricies est, luctus fermentum velit. Quisque sed cursus augue. Morbi vel aliquam mi, vel blandit quam. Curabitur tempor sit amet metus vel porttitor. Proin semper ligula nec enim tristique, in fringilla ex posuere. Donec tortor nisl, iaculis nec vehicula nec, lacinia nec magna.

              Pellentesque ac nisi consequat ex luctus ultrices id nec ex. Vivamus dolor orci, molestie quis risus eleifend, bibendum finibus ligula. Donec sit amet ipsum elit. Quisque lobortis sed tortor vel mollis. Integer rutrum tellus dolor, vel lobortis velit auctor at. Sed pretium risus vitae quam eleifend, nec imperdiet dui luctus. 
            </div> <!-- End of tab panel -->

              <div role="tabpanel" class="tab-pane fade" id="LineWork">
                 Quisque eget dolor luctus, fringilla ipsum in, efficitur ex. Integer a semper leo. Praesent sed nunc ut dui luctus molestie. Curabitur feugiat mi non dui hendrerit, et tristique dolor fringilla. Fusce rutrum nulla eget mi interdum congue. Phasellus aliquam gravida mattis. Nunc ultricies metus id purus tristique, non ultricies neque pharetra. Vestibulum eget enim velit.

                 Duis nec ipsum eros. Nulla consequat lorem at finibus placerat. Sed ut iaculis orci. Mauris iaculis quam quam, vel lobortis tellus vehicula vel. Mauris accumsan nibh in turpis dignissim, sit amet ultricies quam maximus. Etiam posuere ultricies mauris id vehicula. Sed id laoreet dolor, in posuere lorem.
               </div> <!-- End of tab panel -->

              <div role="tabpanel" class="tab-pane fade" id="Sparring">
                Duis nec ipsum eros. Nulla consequat lorem at finibus placerat. Sed ut iaculis orci. Mauris iaculis quam quam, vel lobortis tellus vehicula vel. Mauris accumsan nibh in turpis dignissim, sit amet ultricies quam maximus. Etiam posuere ultricies mauris id vehicula. Sed id laoreet dolor, in posuere lorem. Duis maximus rutrum sem. Fusce nisl lorem, consectetur ac bibendum sed, molestie et justo. Suspendisse laoreet, leo sed volutpat tristique, eros tellus viverra risus, vel hendrerit velit libero a turpis. Duis dignissim in metus non varius. Integer finibus magna tortor, eget molestie sapien viverra eget. Proin ullamcorper, purus ut ultricies facilisis, eros ipsum vestibulum lorem, in fringilla turpis dolor auctor urna. Curabitur in ullamcorper arcu, in posuere dui. Morbi eget ipsum quam. Nunc sed gravida libero, ac convallis neque.
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="//www.youtube.com/embed/iuq6EzUpCMw" frameborder="0" allowfullscreen></iframe>
                </div> <!-- End of embedded video -->
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

