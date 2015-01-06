<?php  
class Database {

  //this will be the database connection variable
  protected static $conn;
  
  /**
   * Connect to the database
   *
   * @return bool false on failure/ MySQLi instance on success
   * 
   **/
  public function connect() {

    //if connection not set establish connection (note self used instead of this ->, because conn is static variable)
    if(!isset(self::$conn)) {
      //using config file like an array
      /* $config = parse_ini_file('./config.ini'); */
      self::$conn = new mysqli('localhost', 'root', 'root', 'warwickTkd');
    }

    //else if connection not established return an error 
    else if(!self::$conn) {
      return false;
    }
    return self::$conn;
  }

  /**
   * Query the database
   *
   * @param $query - query string
   * @return results of mysqli query() function
   **/

  public function query($query) {
    $conn = $this -> connect();
    $result = $conn->query($query);
    return $result;
  }


  /**
   * Fetch rows from the database (SELECT query)
   *
   * @param $query The query string
   * @return bool False on failure / array Database rows on success
   */
  public function select($query) {
    $rows = array();
    $result = $this -> query($query);
    if($result === false) {
      return false;
    }
    while ($row = $result -> fetch_assoc()) {
      $rows[] = $row;
    }
    return $rows;
  }
}
?>
