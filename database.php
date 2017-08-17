<?php  
class Database {

  //dbh - database handler for connections
  private $dbh;
  private $error;
  private $stmt;

  //*******************************************
  // @summary: constructor tries to connect
  // to the db (persistent)
  //*******************************************
  public function __construct(){
    //get login information as array from config file
    $config = parse_ini_file('../config.ini');

    //put information into variables
    $host = $config['host'];
    $dbname = $config['dbname'];
    $username = $config['username'];
    $password = $config['password'];

    //host and db
    $dsn = 'mysql:host=' . $host . ';dbname=' . $dbname;

    //options - ATTR_PERSISTENT: persistent connection to db
    //ATTR_ERRMODE: exception to handle errors
    $options = array(
      PDO::ATTR_PERSISTENT    => true,
      PDO::ATTR_ERRMODE       => PDO::ERRMODE_EXCEPTION
    );

    //try to connect to db else catch error
    try{
      $this->dbh = new PDO($dsn, $username, $password, $options);
    }
    catch(PDOException $e){
      $this->error = $e->getMessage();
    }
  }

  //*******************************************
  // @summary: Runs queries no prepared
  // statements.
  //
  // @param: query - the query to be executed
  //
  // @return: all the results (rows) from 
  // queried results
  //*******************************************
  public function query($query) {
    $this->stmt = $this->dbh->query($query);
    return $this->stmt->fetchAll(PDO::FETCH_ASSOC);
  } 

  //*******************************************
  // @summary: Runs queries with the prepared
  // statements.
  //
  // @param: query - the query to be executed
  //*******************************************
  public function prepare($query) {
    $this->stmt = $this->dbh->prepare($query);
  } 

  //*******************************************
  // @summary: bind variable to value 
  // and type
  //
  // @param: param - parameter to bind value to
  // @param: value - value of variable (to search)
  // @param: type - type of variable (to search)
  //*******************************************
  public function bind($param, $value, $type = null){
    if (is_null($type)) {
      switch (true) {
      //get type of binded variable
      case is_int($value):
        $type = PDO::PARAM_INT;
        break;
      case is_bool($value):
        $type = PDO::PARAM_BOOL;
        break;
      case is_null($value):
        $type = PDO::PARAM_NULL;
        break;
      default:
        $type = PDO::PARAM_STR;
      }
    }
    $this->stmt->bindValue($param, $value, $type);
  }

  //*******************************************
  // @summary: Executes the prepared query
  //
  // @return: executred statemt
  //*******************************************
  public function execute(){
    return $this->stmt->execute();
  }

  //*******************************************
  // @summary: Get all results multiple rows
  //
  // @return: returns all rows in assoc array
  // form
  //*******************************************
  public function resultset(){
    $this->execute();
    return $this->stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  //*******************************************
  // @summary: Get a single row
  //
  // @return: returns single row fetched in 
  // associative array.
  //*******************************************
  public function single(){
    $this->execute();
    return $this->stmt->fetch(PDO::FETCH_ASSOC);
  }
}
?>
