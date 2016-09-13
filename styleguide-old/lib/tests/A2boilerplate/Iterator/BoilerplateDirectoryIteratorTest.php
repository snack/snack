<?php

namespace A2boilerplate\Iterator;

/**
* DirectoryIteratorTest
*/
class BoilerplateDirectoryIteratorTest extends \PHPUnit_Framework_TestCase
{
    protected function setUp()
    {
        $this->test_path = __DIR__ . '/../test_dir/';

        if (!file_exists($this->test_path)) {
            mkdir($this->test_path, 0777);
            touch($this->test_path. 'a.html');
            touch($this->test_path. 'b.xml');
        }
    }

    protected function tearDown()
    {
        if (file_exists($this->test_path)) {
            unlink($this->test_path. 'a.html');
            unlink($this->test_path. 'b.xml');
            rmdir($this->test_path);
        }
    }

    public function testClassExists()
    {
        $classname = 'A2boilerplate\Iterator\BoilerplateDirectoryIterator';

        if (!class_exists($classname)) {
            $this->markTestSkipped("Class $classname not found.");
        }
    }

    /**
     * @expectedException UnexpectedValueException
     */
    public function testDirectoryToIterateDontExistsShouldFail()
    {
        $path = __DIR__ . '/invalidpath/';
        $iterator = new BoilerplateDirectoryIterator($path);
    }

    public function testDirectoryToIterateExists()
    {
        $path = __DIR__;
        $iterator = new BoilerplateDirectoryIterator($path);

        $this->assertEquals($path, $iterator->getPath());
    }

    public function testFileIsHtmlMustReturnFalse()
    {
        $path = __DIR__ . '/../test_dir/';
        $iterator = new BoilerplateDirectoryIterator($path);

        $iterator->next();
        $iterator->next();
        $this->assertFalse($iterator->isHtmlFile());
    }

    public function testFileIsHtml()
    {
        $path = __DIR__ . '/../test_dir/';
        $iterator = new BoilerplateDirectoryIterator($path);

        $iterator->next();
        $this->assertTrue($iterator->isHtmlFile());
    }

    /**
     * @depends testFileIsHtml
     */
    public function testGetFileContent()
    {
        $path = __DIR__ . '/../test_dir/';
        $iterator = new BoilerplateDirectoryIterator($path);

        $iterator->next();
        $this->assertTrue($iterator->isHtmlFile());

        $content = file_get_contents($iterator->getPathname());
        $this->assertEquals($content, $iterator->getFileContent());
    }
}