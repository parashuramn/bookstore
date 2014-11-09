<?php
/**
 * User: Mr Khoa
 * Date: 09/11/2014
 * Time: 10:20 PM
 */
class Bookstore_Brand_Collections extends Mage_Adminhtml_Controller_Action
{
    public function indexAction()
    {
        $this->loadLayout();
        $this->renderLayout();
    }
}