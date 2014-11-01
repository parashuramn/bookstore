<?php
//Bookstore theme options
class Bookstore_ThemeOptions_Helper_Data extends Mage_Core_Helper_Abstract
{
    /**
     * Enable FancyBox Library
     */
    public function fancyBoxJSEnable()
    {
        return 'js/lib/fancybox/jquery.fancybox.js';
    }
    public function fancyBoxCSEnable()
    {
        return 'js/lib/fancybox/jquery.fancybox.css';
    }
    public function fancyBoxJSPack()
    {
        return 'js/lib/fancybox/jquery.fancybox.pack.js';
    }
}