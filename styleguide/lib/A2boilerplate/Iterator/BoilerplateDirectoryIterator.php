<?php

namespace A2boilerplate\Iterator;

/**
* DirectoryIterator
*/
class BoilerplateDirectoryIterator extends \DirectoryIterator
{
    public function isHtmlFile()
    {
        if ($this->current()->getExtension() == "html") {
            return true;
        }

        return false;
    }

    public function getFileContent()
    {
        return file_get_contents($this->current()->getPathname());
    }
}