//var webdriver = require('selenium-webdriver'),
//By = webdriver.By,
//untill=webdriver.until;

const {Builder, By, Key, until} = require('selenium-webdriver');
var driver = new Builder().forBrowser('firefox').build();

driver.get('https://den02dfe.us.oracle.com/part5');
driver.findElement(By.xpath('//a[@title='Log in to your customer account']')).click();
driver.findElement(By.name('email_create')).sendKeys('thulasibabu.246@gmail.com');
driver.findElement(By.name('customer_firstname')).sendKeys('john');
driver.findElement(By.name('customer_lastname')).sendKeys('peetar');
driver.findElement(By.name('passwd')).sendKeys('John@123');
driver.findElement(By.name('address1')).sendKeys('1-136,JS Street Hyd');
driver.findElement(By.name('city')).sendKeys('Hyderabad');
driver.findElement(By.xpath('//span[text()='Register']')).click();
driver.wait(check_title,1000);

function check_title(){
	var promise = driver.getTitle().then( function(title){
	
	if(title == 'My Store'){
		console.log('sucess');
	return true;
	}
	else
	{
		console.log('fail-'+title);
	}
});
return promise;
}