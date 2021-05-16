import sys
import unittest
# import HtmlTestRunner
import xmlrunner
import bank.tests

def module_tests():
    suite, loader = unittest.TestSuite(), unittest.TestLoader()
    try:
        suite.addTest(loader.loadTestsFromModule(bank.tests))
    except ValueError:
        print("unknown test, use: --help")
        sys.exit()
    
    return suite

if __name__ == "__main__":
    # runner = unittest.TextTestRunner()
    # runner = HtmlTestRunner.HTMLTestRunner(output='example_dir')
    # rapport xml au format junit déposé dans un dossier spécique "reports"
    runner = xmlrunner.XMLTestRunner(output='reports')
    runner.run(module_tests())
