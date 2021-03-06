import unittest
from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.keys import Keys

class PythonOrgSearch(unittest.TestCase):

  def setUp(self):
    options = Options()
    options.headless = True
    self.driver = webdriver.Remote(
      options=options,
      command_executor="http://gitlab_selenium_server:4444/wd/hub",
      # command_executor="http://127.0.0.1:4444/wd/hub",
      desired_capabilities=DesiredCapabilities.FIREFOX)

  def test_search_in_python_org(self):
    driver = self.driver
    driver.get("http://www.python.org")
    elem = driver.find_element_by_name("q")
    elem.send_keys("pycon")
    elem.send_keys(Keys.RETURN)
    assert "No results found." not in driver.page_source

  def tearDown(self):
    self.driver.close()

if __name__ == "__main__":
  unittest.main()
