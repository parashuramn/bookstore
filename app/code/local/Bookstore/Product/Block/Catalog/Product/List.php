<?php
/**
 * User: Mr Khoa
 * Email: mrkhoa99@gmail.com
 * Date: 01/11/2014
 * Time: 9:48 AM
 */ 
class Bookstore_Product_Block_Catalog_Product_List extends Mage_Catalog_Block_Product_List {

    public function isNew($_product)
    {
        $newFromDate = Mage::getModel('catalog/product')->load($_product->getID())->getNewsFromDate();
        $newToDate = Mage::getModel('catalog/product')->load($_product->getID())->getNewsToDate();
        $now = Mage::app()->getLocale()->date()->toString(Varien_Date::DATETIME_INTERNAL_FORMAT);
        if(($newFromDate < $now && $newFromDate != NULL) && ($newToDate > $now || $newToDate == '')) {
            return true;
        }
    }

    public function isFeatured($_product)
    {
        if($_product->getFeatureProduct()==1){
           return true;
        }
    }

    public function isSpecial($_product)
    {
        $specialFromDate = Mage::getModel('catalog/product')->load($_product->getID())->getSpecialFromDate();
        $specialToDate = Mage::getModel('catalog/product')->load($_product->getID())->getSpecialToDate();
        $now = Mage::app()->getLocale()->date()->toString(Varien_Date::DATETIME_INTERNAL_FORMAT);
        if(($specialFromDate < $now && $specialFromDate != NULL) && ($specialToDate > $now || $specialToDate == '')) {
            return true;
        }
    }
    public function getPercentSpecial($_product)
    {
        $specialPrice = Mage::getModel('catalog/product')->load($_product->getID())->getSpecialPrice();
        $productPrice = Mage::getModel('catalog/product')->load($_product->getID())->getPrice();
        if($specialPrice){
            $percentPrice = ($specialPrice/$productPrice)*100;
            $percentPrice = round($percentPrice);
            return $percentPrice;
        }else{
            return false;
        }

    }
}