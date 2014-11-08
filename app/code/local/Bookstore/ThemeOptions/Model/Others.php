<?php
/**
 * User: Mr Khoa
 * Date: 08/11/2014
 * Time: 11:01 PM
 */

class Bookstore_ThemeOptions_Model_Others {

    public function getBacktoTop()
    {
        $config = Mage::getStoreConfig('bookstore/backtotop',Mage::app()->getStore());
        return $config;
    }
} 